import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

async function ImagePage({ params }: Props) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img
        src={`/images/news/${newsItem.image}`}
        alt={`${newsItem.title} image`}
      />
    </div>
  );
}
export default ImagePage;

type Props = {
  params: { slug: string };
};
