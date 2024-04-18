<script>
    import qrCode from "$lib/qr-code/images/image-qr-code.png"
</script>

<div class="flex h-full w-full flex-col items-center justify-center bg-custom-qr-light-gray p-20">
    <div class="flex w-[320px] flex-col rounded-xl bg-white p-4 shadow-lg">
        <img src={qrCode} class="rounded-xl" alt="qr code" />
        <div class="my-6 px-4">
            <h1
                class="text-center font-Outfit text-[22px] font-bold leading-tight text-custom-qr-dark-blue"
            >
                Improve your front-end skills by building projects
            </h1>
            <p
                class="mt-4 text-center font-Outfit text-[15px] font-normal leading-tight text-custom-qr-gray-blue"
            >
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next
                level
            </p>
        </div>
    </div>
</div>
