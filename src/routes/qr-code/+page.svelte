<script>
    import qrCode from "$lib/qr-code/images/image-qr-code.png"
</script>

<div class="bg-custom-qr-light-gray flex h-full w-full flex-col items-center justify-center p-20">
    <div class="flex w-[320px] flex-col rounded-xl bg-white p-4 shadow-lg">
        <img src={qrCode} class="rounded-xl" alt="qr code" />
        <div class="my-6 px-4">
            <h1 class="font-Outfit font-bold text-[22px] text-custom-qr-dark-blue text-center leading-tight">
                Improve your front-end skills by building projects
            </h1>
            <p class="font-Outfit font-normal text-[15px] text-custom-qr-gray-blue mt-4 text-center leading-tight">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next
                level
            </p>
        </div>
    </div>
</div>
