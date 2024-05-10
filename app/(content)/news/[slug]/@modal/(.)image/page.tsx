import { ModalBackdrop } from "@/components";
import { getNewsItem } from "@/lib/news";
import { notFound, useRouter } from "next/navigation";

async function InterceptedImagePage({ params }: Props) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={`${newsItem.title} image`}
          />
        </div>
      </dialog>
    </>
  );
}
export default InterceptedImagePage;

type Props = {
  params: { slug: string };
};
