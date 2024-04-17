<script>
    import "../app.css"
    import { navigating } from "$app/stores"
    import { expoOut } from "svelte/easing"

    import { slide } from "svelte/transition"
</script>

{#if $navigating}
    <!--
      Loading animation for next page since svelte doesn't show any indicator.
       - delay 100ms because most page loads are instant, and we don't want to flash
       - long 12s duration because we don't actually know how long it will take
       - exponential easing so fast loads (>100ms and <1s) still see enough progress,
         while slow networks see it moving for a full 12 seconds
    -->
    <!-- Source: https://github.com/scosman/sveltekit-navigation-loader-->
    <div
        class="fixed inset-x-0 top-0 z-50 h-1 bg-amber-500"
        in:slide={{ delay: 100, duration: 12000, axis: "x", easing: expoOut }}
    ></div>
{/if}

<slot />
