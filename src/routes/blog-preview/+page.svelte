<script>
    import illustrationArticle from "$lib/blog-preview/assets/images/illustration-article.svg"
    import userAvatar from "$lib/blog-preview/assets/images/image-avatar.webp"
</script>

<div class="bg-custom-blog_preview-yellow flex h-full w-full flex-col items-center justify-center p-20 leading-[150%]">
    <div
        class="drop-shadow-[8px_8px_rgba(0,0,0,1)] font-Figtree flex w-[384px] flex-col gap-6 rounded-[20px] border border-black bg-white p-6 font-medium shadow-lg"
    >
        <img src={illustrationArticle} class="rounded-[10px]" alt="Abstract programming related illustration" />
        <div class="flex flex-col gap-3">
            <div
                class="bg-custom-blog_preview-yellow text-custom-blog_preview-black w-fit rounded px-3 py-1 text-[14px] font-extrabold"
            >
                Learning
            </div>
            <div class="text-[14px]">Published 18 Apr 2024</div>
            <h1 class="text-custom-blog_preview-black text-2xl font-extrabold">HTML & CSS foundations</h1>
            <p class=" text-custom-blog_preview-gray text-[16px]">
                These languages are the backbone of every website, defining structure, content, and
                presentation.
            </p>
        </div>
        <div class="flex flex-row items-center gap-3">
            <img src={userAvatar} alt="avatar" class="h-8 w-8" />
            <h2 class="text-[14px] font-extrabold">Greg Hooper</h2>
        </div>
    </div>
</div>