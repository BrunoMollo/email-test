<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import type { ActionData } from './$types';
	export let form: ActionData;

	$: setTimeout(() => {
		if (form) {
			form.sended = false;
		}
	}, 2000);
</script>

<main class="container h-full mx-auto flex flex-col justify-center items-center">
	<div class="card px-10 mt-14">
		<h1 class="h1 card-header">Send email</h1>
		<form method="post" use:enhance>
			<label class="mt-8" for="to">
				<span class="text-lg">Send to:</span>
				<input class="input" name="to" id="to" type="email" required />
			</label>
			<label class="label mt-5" for="body">
				<span class="text-lg">Content:</span>
				<textarea class="textarea" name="body" id="body" cols="30" rows="4" required></textarea>
			</label>
			<div class="flex mb-5">
				<button class="btn variant-filled ml-auto" type="submit">Send</button>
			</div>
		</form>
	</div>

	{#if form?.sended}
		<aside class="alert variant-ghost" transition:fade|local={{ duration: 200 }}>
			<div class="alert-message">
				<h3 class="h3">Email Sended</h3>
				<p>to: {form.to}</p>
			</div>
		</aside>
	{/if}
</main>
