'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface UpdateItem {
  id: string;
  title: string;
  url: string;
  summary: string;
  category: string;
  publishedAt: string;
}

export default function RecentUpdates() {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecentUpdates() {
      try {
        const response = await fetch('/api/updates?limit=3');
        if (!response.ok) {
          throw new Error('Failed to fetch recent updates');
        }
        const data = await response.json();
        setUpdates(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchRecentUpdates();
  }, []);

  if (loading) return <p>Loading recent updates...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {updates.map((item) => (
        <Card key={item.id} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-orange-100 text-orange-700">{item.category}</Badge>
              <span className="text-sm text-slate-500">
                {new Date(item.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <CardTitle className="text-xl leading-tight">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {item.title}
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">{item.summary}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Read Full Update
                <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
