<!-- Profile.svelte -->
<script>
    export let githubUsername;
</script>

<div
    class="min-w-full rounded-lg flex items-center justify-center text-center overflow-hidden shadow-lg bg-white p-3 bg-opacity-60"
>
    <img
        class="w-24 h-24 rounded-full"
        src={`https://github.com/${githubUsername}.png`}
        alt={`${githubUsername}'s profile picture`}
    />

    <div class="px-4">
        <h2 class="font-bold text-xl mb-2">@{githubUsername}</h2>
        <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            class="text-blue-500 hover:underline">github.com/{githubUsername}</a
        >
    </div>
</div>
