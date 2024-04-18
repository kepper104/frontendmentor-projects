<script>
    import qrCode from "$lib/qr-code/images/image-qr-code.png"
</script>

<div class="palette-yellow-color flex h-full w-full flex-col items-center justify-center p-20">
    <div class="flex w-[320px] flex-col rounded-xl bg-white p-4 shadow-lg">
        <img src={qrCode} class="rounded-xl" alt="qr code" />
        <div class="my-6 px-4">
            <h1 class="outfit-header text-header-color text-center leading-tight">
                Improve your front-end skills by building projects
            </h1>
            <p class="outfit-text text-paragraph-color mt-4 text-center leading-tight">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next
                level
            </p>
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

    .outfit-text {
        font-family: "Outfit", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: 15px;
    }

    .outfit-header {
        font-family: "Outfit", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-size: 22px;
    }

    .text-header-color {
        color: hsl(218, 44%, 22%);
    }
    .text-paragraph-color {
        color: hsl(220, 15%, 55%);
    }
    .palette-yellow-color {
        background-color: hsl(212, 45%, 89%);
    }
</style>
