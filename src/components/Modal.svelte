<script lang="ts">
	interface Props {
		openCloseModal: () => void
	}

	const { openCloseModal }: Props = $props()
</script>

<div class="overlay">
	<form
		class="mx-10 md:max-w-[500px] w-full py-[18px] border-transparent px-8 bg-white dark:bg-mainBlack rounded-lg border dark:border-grey transition-colors duration-300 flex flex-col"
	>
		<div class="grow h-auto mb-40">
			<h3
				class="uppercase mb-6 font-medium text-2xl leading-6 text-center text-black dark:text-white"
			>
				New note
			</h3>

			<input
				maxlength="30"
				type="text"
				placeholder="Input your note..."
				class="py-2 pl-4 rounded-md placeholder:dark:text-[#666] bg-transparent border-2 w-full pr-4 border-violet dark:border-grey transition-colors duration-300 placeholder:select-none focus:dark:border-violet"
			/>
		</div>

		<div class="flex items-center justify-between space-x-3">
			<button
				onclick={openCloseModal}
				type="button"
				class="uppercase font-medium text-lg leading-[18px] py-2 px-5 border border-violet rounded-md bg-white dark:bg-mainBlack text-violet hover:text-white hover:!bg-violet active:!bg-white active:text-violet dark:active:!bg-mainBlack transition-colors duration-300"
			>
				Cancel
			</button>

			<button
				type="submit"
				class="uppercase font-medium text-lg leading-[18px] py-2 px-5 border border-violet rounded-md text-white bg-violet hover:text-violet hover:!bg-white active:text-white active:!bg-violet transition-colors duration-300"
			>
				Apply
			</button>
		</div>
	</form>
</div>
