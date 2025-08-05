import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(search_params.get('limit') || '10', 10);
  const category = searchParams.get('category');
  const query = searchParams.get('query');

  const skip = (page - 1) * limit;

  try {
    const where: Prisma.UpdateItemWhereInput = {};

    if (category) {
      where.category = {
        equals: category,
        mode: 'insensitive',
      };
    }

    if (query) {
      where.OR = [
        { title: { contains: query, mode: 'insensitive' } },
        { summary: { contains: query, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await prisma.$transaction([
      prisma.updateItem.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          publishedAt: 'desc',
        },
      }),
      prisma.updateItem.count({ where }),
    ]);

    return NextResponse.json({
      data: items,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching updates:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while fetching updates.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
