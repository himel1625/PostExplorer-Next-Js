import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from 'keep-react';
import Link from 'next/link';

export const PostCard = ({ title, description, id }) => {
  return (
    <Card className='w-full max-w-sm p-4 h-auto flex flex-col bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow'>
      <CardContent className='space-y-4 flex-1'>
        <CardTitle className='text-2xl font-semibold text-gray-800'>
          {title}
        </CardTitle>
        <CardDescription className='text-sm text-gray-600'>
          {description.length > 50
            ? `${description.substring(0, 50)}...`
            : description}
        </CardDescription>
      </CardContent>
      <Link href={`/blog/${id}`}>
        <Button className='mt-4 w-full bg-[#f98f32] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#e57929] transition-colors'>
          Details
        </Button>
      </Link>
    </Card>
  );
};
