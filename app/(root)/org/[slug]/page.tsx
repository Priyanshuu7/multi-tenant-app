'use client';

import * as React from 'react';
import Navbar from '@/app/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { createBlog } from './actions';
import { useOrganization } from '@clerk/nextjs';
export default function OrgPage() {
  const [blogcontent, setblogcontent] = React.useState('');
  const [blogtitle, setblogtitle] = React.useState('');

  const selectedOrg = useOrganization();

  const handleCreateBlog = async () => {
    if (!selectedOrg.organization?.id) return;

    await createBlog({
      body: blogcontent.trim(),
      orgId: selectedOrg.organization?.id,
      title: blogtitle,
    });

    setblogtitle('');
    setblogcontent('');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex justify-center">
        <div className="w-full max-w-xl p-10">
          <Input
            className="w-full"
            value={blogtitle}
            placeholder="Title"
            onChange={(e) => setblogtitle(e.target.value)}
          />

          <Textarea
            className="w-full mt-4"
            placeholder="Enter Your Blog Content"
            value={blogcontent}
            onChange={(e) => setblogcontent(e.target.value)}
          />

          <div className="flex justify-center mt-4">
            <Button onClick={handleCreateBlog}>Create Blog</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
