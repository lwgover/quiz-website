<script>
    let show = true;
</script>
{#if show}
<div class='temp-alert'>
    <div class='alert'>
        <div class='alert-text'>
            This Website is currently under development, with the backend functionality not yet deployed.
            This means features like login, taking quizzes, and making quizzes will perpetually load, or fail currently. 
            Ideally these features will be live within the next few days. Please explore the current features and design though!
        </div>
        <div class='alert-text'>
            Click 'I understand' to continue.
        </div>
        <div class='I-understand alert-text' on:click={() => show = false} role='none'>I Understand </div>
    </div>
</div>
{/if}
<style>
    .I-understand {
        width: 60%;
        height: 40px;
        background-color: black;
        margin:auto;
        margin-top: 50px;
        color: white;
        text-align: center;
        padding: 8px;
        border-radius: 15px;
    }
    .alert-text {
        font-family: var(--font-sans);
        font-size: 23px;
        font-weight: 200;
        margin-top: 50px;
    }
    .alert {
        background-color: white;
        min-width: 400px;
        max-width: 600px;
        width: 30vw;
        height: 80vh;
        margin: auto;
        margin-top: 10vh;
        border-radius: 10px;
        padding: 50px;
        padding-top: 50px;
    }
    .temp-alert {
        position: absolute;
        width:100%;
        z-index: 2000;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        cursor:auto;
        overscroll-behavior-y: none;
    }
</style>
