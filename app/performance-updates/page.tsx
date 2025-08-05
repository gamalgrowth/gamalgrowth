'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Head from 'next/head';

interface UpdateItem {
  id: string;
  title: string;
  url: string;
  summary: string;
  category: string;
  publishedAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export default function PerformanceUpdatesPage() {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    async function fetchUpdates() {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: '10',
          ...(query && { query }),
          ...(category && { category }),
        });
        
        const response = await fetch(`/api/updates?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch updates');
        }
        const data = await response.json();
        setUpdates(data.data);
        setPagination(data.pagination);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchUpdates();
  }, [page, query, category]);

  const handleSearch = () => {
    setQuery(searchInput);
    setPage(1);
  };
  
  const generateStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': updates.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'NewsArticle',
          'headline': item.title,
          'url': item.url,
          'datePublished': item.publishedAt,
          'description': item.summary,
          'author': {
            '@type': 'Person',
            'name': 'Gamal Growth'
          }
        }
      }))
    };
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
        />
      </Head>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8">Performance Marketing Updates</h1>

        <div className="flex gap-4 mb-8">
          <Input 
            placeholder="Search updates..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="max-w-sm"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {updates.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {item.title}
                      </a>
                    </CardTitle>
                    <Badge variant="secondary">{item.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">{item.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <Button 
                onClick={() => setPage(p => Math.max(1, p - 1))} 
                disabled={!pagination || pagination.page <= 1}
              >
                Previous
              </Button>
              <span>
                Page {pagination?.page} of {pagination?.totalPages}
              </span>
              <Button 
                onClick={() => setPage(p => p + 1)}
                disabled={!pagination || pagination.page >= pagination.totalPages}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
