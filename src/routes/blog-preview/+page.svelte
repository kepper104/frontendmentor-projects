<script>
    import illustrationArticle from "$lib/blog-preview/assets/images/illustration-article.svg"
    import userAvatar from "$lib/blog-preview/assets/images/image-avatar.webp"
</script>

<div class="palette-yellow-color flex h-full w-full flex-col items-center justify-center p-20">
    <div
        id="card"
        class="figtree flex w-[384px] flex-col gap-6 rounded-[20px] border border-black bg-white p-6 font-medium shadow-lg"
    >
        <img src={illustrationArticle} class="rounded-[10px]" alt="Abstract coding related" />
        <div class="flex flex-col gap-3">
            <div
                class="palette-yellow-color palette-black-color w-fit rounded px-3 py-1 text-[14px] font-extrabold"
            >
                Learning
            </div>
            <div class="text-[14px]">Published 18 Apr 2024</div>
            <h1 class="palette-black-color text-2xl font-extrabold">HTML & CSS foundations</h1>
            <p class=" palette-gray-color text-[16px]">
                These languages are the backbone of every website, defining structure, content, and
                presentation.
            </p>
        </div>
        <div class="flex flex-row items-center gap-3">
            <img src={userAvatar} alt="avatar" class="h-8 w-8" />
            <h3 class="text-[14px] font-extrabold">Greg Hooper</h3>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: "Figtree";
        src:
            url("/src/lib/blog-preview/assets/fonts/Figtree-VariableFont_wght.ttf")
                format("truetype supports variations"),
            url("/src/lib/blog-preview/assets/fonts/Figtree-VariableFont_wght.ttf")
                format("truetype-variations");
        font-weight: 100 1000;
    }

    #card {
        filter: drop-shadow(8px 8px black);
    }

    .figtree {
        font-family: Figtree, sans-serif;
        line-height: 150%;
    }

    .palette-yellow-color {
        background-color: hsl(47, 88%, 63%);
    }

    .palette-gray-color {
        color: hsl(0, 0%, 50%);
    }

    .palette-black-color {
        color: hsl(0, 0%, 7%);
    }
</style>
