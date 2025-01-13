<script lang="ts">
	import { writable, type Writable } from 'svelte/store'
	import type { TodoProps } from '../@types'
	import ModalButton from './ModalButton.svelte'

	interface Props {
		openCloseModal: () => void
		addTodo: (todo: TodoProps) => void
	}

	const { openCloseModal, addTodo }: Props = $props()
	let todoTitle: Writable<string> = writable('')

	const onSubmit = (e?: Event): void => {
		e?.preventDefault()

		if (todoTitle) {
			const newTodo = {
				id: Date.now(),
				title: $todoTitle,
				completed: false,
			}

			addTodo(newTodo)
		} else {
			alert('Please enter note')
		}

		openCloseModal()
	}
</script>

<div class="overlay">
	<form
		onsubmit={onSubmit}
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
				oninput={(e: Event) =>
					todoTitle.set((e.target as HTMLInputElement).value)}
				class="py-2 pl-4 rounded-md placeholder:dark:text-[#666] bg-transparent border-2 w-full pr-4 border-violet dark:border-grey transition-colors duration-300 placeholder:select-none focus:dark:border-violet"
			/>
		</div>

		<div class="flex items-center justify-between space-x-3">
			<ModalButton isCancelBtn={true} onClick={openCloseModal}>
				Cancel
			</ModalButton>

			<ModalButton isCancelBtn={false} onClick={onSubmit}>Apply</ModalButton>
		</div>
	</form>
</div>
