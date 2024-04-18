<script lang="ts">
    import { onMount } from "svelte"

    const travelDurationMs = 500

    onMount(() => {
        let mouseFollower = document.getElementById("following")! // dangerous

        document.body.onpointermove = (e) => {
            let { clientX, clientY } = e

            clientX = Math.min(Math.max(clientX, 100), window.innerWidth - 150)
            clientY = Math.min(Math.max(clientY, 100), window.innerHeight - 150)

            mouseFollower.hidden = false

            mouseFollower.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`
                },
                { duration: travelDurationMs, fill: "forwards" }
            )
        }
    })
</script>

<div id="following" class=""></div>

<div class="font-Rubik font-medium flex h-full w-full flex-col bg-slate-900 pb-5 pl-20 pt-20 text-slate-200">
    <h1 class="z-1 text-6xl">Hello there!</h1>

    <h2 class="z-1 mt-5 text-3xl text-slate-300">
        Here you can preview all my projects from practicing on <a
            href="https://www.frontendmentor.io"
            class="mt-1 rounded-2xl bg-opacity-10 p-2 font-bold underline underline-offset-4 hover:translate-x-0 hover:bg-slate-800"
            >Frontend Mentor</a
        >
    </h2>
    <div class="z-1 mt-10 flex w-fit flex-col gap-10 pl-10 text-4xl hover:text-slate-400">
        <a href="qr-code"> QR Code </a>
        <a href="blog-preview"> Blog preview </a>
    </div>

    <footer class="mt-auto text-slate-200 opacity-30">
        Favicon taken from <a
            class="underline"
            href="https://www.flaticon.com/free-icons/curriculum-vitae"
            title="curriculum vitae icons"
            >Curriculum vitae icons created by Abdul-Aziz - Flaticon</a
        >
    </footer>
</div>

<style>
    a {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

        /*@apply transition-all hover:translate-x-4 hover:text-slate-200;*/
    }
    a:hover {
        translate: 4px;
        color: rgb(226 232 240)
    }

    #following {
        position: absolute;
        width: 300px;
        height: 300px;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        border-radius: 50%;
        background: rgb(30, 137, 237);
        background: radial-gradient(circle, rgba(30, 137, 237, 1) 0%, rgba(70, 252, 129, 0.6) 100%);
        filter: blur(40px);
        opacity: 10%;
        pointer-events: none;
    }
</style>
