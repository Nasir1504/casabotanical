
import { COLLECTIONS_CARD_DATA } from "../collectionsCardData";
import { notFound } from "next/navigation";

export default async function page({ params }: {
    params: Promise<{ collectionsName: string }>
}) {

    const { collectionsName } = await params;

    const blogExists = COLLECTIONS_CARD_DATA.some((card) => {

        return card.linkTo
            .toLowerCase()
            .replace(/^\/collections\//, '') === collectionsName
    });


    if (!blogExists) {
        return notFound()
    }


    return (
        <div className="individual-collections-main w-full h-[100vh] flex justify-center items-center">
            {collectionsName}<br />
        </div>
    )
}
