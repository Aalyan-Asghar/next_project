import SpecificPost from "@/component/specificPost";

export default async function Comment({ params }) {

    const id = await params;
    const data = await fetch(process.env.NEXT_PUBLIC_POST_API_KEY + '/3/comments')
    const comment = await data.json();

    return (
        <>
            <div className="p-5 pb-20">
                <h1 className="text-3xl mb-5 font-bold">Post Details</h1>
                <SpecificPost />
            </div>
        </>
    );
}