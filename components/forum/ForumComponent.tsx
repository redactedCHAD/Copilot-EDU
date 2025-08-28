import React, { useState } from 'react';
import { MOCK_FORUM_THREADS } from '../../data/mockData';
import type { ForumThread } from '../../types';
import { useAuth } from '../../context/AuthContext';

const ForumComponent: React.FC = () => {
    const [threads, setThreads] = useState<ForumThread[]>(MOCK_FORUM_THREADS);
    const [viewingThread, setViewingThread] = useState<ForumThread | null>(null);
    const [newThreadTitle, setNewThreadTitle] = useState('');
    const [newThreadContent, setNewThreadContent] = useState('');
    const [replyContent, setReplyContent] = useState('');

    const { user } = useAuth();

    const handleCreateThread = (e: React.FormEvent) => {
        e.preventDefault();
        if(!newThreadTitle.trim() || !newThreadContent.trim() || !user) return;
        const newThread: ForumThread = {
            id: `thread-${Date.now()}`,
            title: newThreadTitle,
            author: { id: user.id, fullName: user.fullName },
            createdAt: 'Just now',
            replyCount: 0,
            posts: [{
                id: `post-${Date.now()}`,
                author: { id: user.id, fullName: user.fullName },
                createdAt: 'Just now',
                content: newThreadContent,
            }]
        };
        setThreads([newThread, ...threads]);
        setNewThreadTitle('');
        setNewThreadContent('');
    };
    
    const handleCreateReply = (e: React.FormEvent) => {
        e.preventDefault();
        if(!replyContent.trim() || !user || !viewingThread) return;

        const newPost = {
            id: `post-${Date.now()}`,
            author: { id: user.id, fullName: user.fullName },
            createdAt: 'Just now',
            content: replyContent
        };
        
        const updatedThread = {
            ...viewingThread,
            posts: [...viewingThread.posts, newPost],
            replyCount: viewingThread.replyCount + 1,
        }

        setThreads(threads.map(t => t.id === viewingThread.id ? updatedThread : t));
        setViewingThread(updatedThread);
        setReplyContent('');
    }

    if (viewingThread) {
        return (
            <div>
                 <button onClick={() => setViewingThread(null)} className="mb-4 text-sm text-primary hover:underline">&larr; Back to all discussions</button>
                 <h2 className="text-2xl font-extrabold mb-4">{viewingThread.title}</h2>
                 <div className="space-y-4">
                     {viewingThread.posts.map(post => (
                         <div key={post.id} className="p-4 bg-surface rounded-lg shadow-sm">
                             <p className="text-text-secondary">{post.content}</p>
                             <div className="text-xs text-gray-400 mt-2 text-right">
                                 &mdash; {post.author.fullName}, {post.createdAt}
                             </div>
                         </div>
                     ))}
                 </div>
                 <form onSubmit={handleCreateReply} className="mt-6">
                    <textarea value={replyContent} onChange={e => setReplyContent(e.target.value)} required placeholder="Write a reply..." className="w-full p-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary"></textarea>
                    <button type="submit" className="mt-2 bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md">Post Reply</button>
                 </form>
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-2xl font-extrabold border-b border-border pb-4 mb-6">Discussions</h2>

            {/* Create New Thread Form */}
            <div className="p-4 bg-surface rounded-lg shadow-sm mb-8">
                <h3 className="font-semibold mb-3">Create a new discussion</h3>
                <form onSubmit={handleCreateThread} className="space-y-3">
                    <input type="text" value={newThreadTitle} onChange={e => setNewThreadTitle(e.target.value)} required placeholder="Discussion title" className="w-full p-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary" />
                    <textarea value={newThreadContent} onChange={e => setNewThreadContent(e.target.value)} required placeholder="Start the conversation..." className="w-full p-2 bg-background border border-border rounded-md focus:ring-primary focus:border-primary"></textarea>
                    <button type="submit" className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md">Start Discussion</button>
                </form>
            </div>

            {/* Thread List */}
            <div className="space-y-4">
                {threads.map(thread => (
                    <div key={thread.id} className="p-4 bg-surface rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow" onClick={() => setViewingThread(thread)}>
                        <h4 className="font-semibold text-primary">{thread.title}</h4>
                        <div className="text-xs text-gray-400 mt-1 flex justify-between">
                            <span>Started by {thread.author.fullName} &bull; {thread.createdAt}</span>
                            <span>{thread.replyCount} replies</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ForumComponent;