<script>
    import Scene from '$lib/components/Scene.svelte';

    const brownieRenders = [
        {id: 1, name: 'Render 1', url: '/Highres_Brownie.glb'},
        {id: 2, name: 'Render 2', url: '/Highres_Brownie_couple.glb'},
    ];

    let selectedRender = brownieRenders[0];
</script>

<main>
    <div class="viewport">
        {#key selectedRender.id}
            <Scene modelUrl={selectedRender.url} />
        {/key}
    </div>
    <div class="controls">
        <h1>Brownie Viewer</h1>
        <p>Select a render to view:</p>
        <div class="button-group">
            {#each brownieRenders as render}
                <button 
                    class:active={selectedRender.id === render.id}
                    on:click={() => selectedRender = render}
                >
                    {render.name}
                </button>
            {/each}
        </div>
    </div>
</main>
<style>
    :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
    }
    .controls {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .button-group {
        display: flex;
        gap: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: 1px solid #ccc;
        background: #fff;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.2s ease;
    }

    button:hover {
        background: #f0f0f0;
        border-color: #aaa;
    }

    button.active {
        background: #007bff;
        color: white;
        border-color: #007bff;
    }

</style>