import { NextResponse } from 'next/server';
import { Prisma, PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as cheerio from 'cheerio';

const prisma = new PrismaClient();
const BASE_URL = 'https://www.swipeinsight.com/shorts';

// ... (rest of the file)
