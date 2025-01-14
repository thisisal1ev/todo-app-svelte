<script lang="ts">
	import type { TodoProps } from '../@types'
	import { CheckIcon, EditIcon, TrashIcon, XIcon } from './icons'
	import { Checkbox, IconButton } from './'
	import { writable, type Writable } from 'svelte/store'

	interface Props {
		todo: TodoProps
		removeTodo: (id: number) => void
	}

	let rename: boolean = $state(false)
	const inputValue: Writable<string> = writable('')
	const { removeTodo, todo }: Props = $props()

	const toggleRename = (newTitle?: string): void => {
		rename = !rename

		if (newTitle) {
			todo.title = newTitle.trim()
		}
	}
</script>

<li
	class="border-violet border-t first:border-none px-4 py-6 flex items-center justify-between h-24 group"
>
	{#if !rename}
		<div class="flex items-center space-x-4 mr-5 cursor-pointer">
			<Checkbox
				isCompleted={todo.completed}
				id={todo.id}
				title={todo.title}
				onChange={() => (todo.completed = !todo.completed)}
			/>
		</div>
	{:else}
		<label
			for={`todo-${todo.id}`}
			class="flex items-center justify-between space-x-3"
		>
			<input
				id={`todo-${todo.id}`}
				bind:value={todo.title}
				oninput={(e: Event) =>
					($inputValue = (e.target as HTMLInputElement).value)}
				onkeydown={(e: KeyboardEvent) =>
					e.key === 'Enter' && toggleRename($inputValue.trim())}
				type="text"
				placeholder="Enter new title"
				class="pl-3 py-2 pr-3 bg-white border-violet dark:border-grey dark:bg-mainBlack border-2 focus:!border-violet transition-colors duration-300 rounded-md max-w-32 sm:max-w-max"
			/>

			<IconButton onClick={() => toggleRename($inputValue.trim())}>
				<CheckIcon />
			</IconButton>
		</label>
	{/if}

	<div
		class="lg:opacity-0 flex transition-opacity duration-300 items-center space-x-2 group-hover:opacity-100"
	>
		{#if !rename}
			<IconButton onClick={() => toggleRename()}>
				<EditIcon
					class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
				/>
			</IconButton>
		{:else}
			<IconButton onClick={() => toggleRename()}>
				<XIcon />
			</IconButton>
		{/if}

		<IconButton onClick={() => removeTodo(todo.id)}>
			<TrashIcon
				class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
			/>
		</IconButton>
	</div>
</li>
