<script lang="ts">
	interface Props {
		isCancelBtn: boolean
		onClick?: () => void
	}

	const { isCancelBtn, onClick }: Props = $props()
</script>

<button
	onclick={onClick}
	type="button"
	class={isCancelBtn
		? 'uppercase font-medium text-lg leading-[18px] py-2 px-5 border border-violet rounded-md bg-white dark:bg-mainBlack text-violet hover:text-white hover:!bg-violet active:!bg-white active:text-violet dark:active:!bg-mainBlack transition-colors duration-300'
		: 'uppercase font-medium text-lg leading-[18px] py-2 px-5 border border-violet rounded-md text-white bg-violet hover:text-violet hover:!bg-white active:text-white active:!bg-violet transition-colors duration-300'}
>
	<slot />
</button>
