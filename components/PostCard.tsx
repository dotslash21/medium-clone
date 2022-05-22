import Link from 'next/link'
import { urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
    post: Post
}

function PostCard({ post }: Props) {
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border">
        <img
          className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={urlFor(post.mainImage).url()!}
          alt={post.title}
        />
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              {post.description} by {post.author.name}
            </p>
          </div>

          <img
            className="h-12 w-12 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard
