<script lang="ts">
	import Checkbox from './Checkbox.svelte'
	import { EditIcon, TrashIcon } from './icons'

	interface Props {
		todos: {
			id: number
			title: string
			completed: boolean
		}[]
	}

	const { todos }: Props = $props()
</script>

<div class="flex justify-center">
	<ul class="mt-8 max-w-lg mx-0 grow">
		{#each todos as todo}
			<li
				class="border-violet border-t first:border-none px-4 py-6 flex items-center justify-between h-24 group"
			>
				<div class="flex items-center space-x-4 mr-5 cursor-pointer">
					<Checkbox
						isCompleted={todo.completed}
						id={todo.id}
						title={todo.title}
						onChange={() => (todo.completed = !todo.completed)}
					/>
				</div>

				<div
					class="lg:opacity-0 flex transition-opacity duration-300 items-center space-x-2 group-hover:opacity-100"
				>
					<button
						title="rename btn"
						aria-label="Rename"
						class="p-2 rounded-full transition-colors duration-300 hover:dark:bg-slate-100/15 flex justify-center items-center outline-none active:dark:bg-slate-100/30 hover:bg-black/15 active:bg-black/30"
					>
						<EditIcon
							class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
						/>
					</button>

					<button
						title="remove btn"
						aria-label="Remove"
						class="p-2 rounded-full transition-colors duration-300 hover:dark:bg-slate-100/15 flex items-center justify-center outline-none active:dark:bg-slate-100/30 hover:bg-black/15 active:bg-black/30"
					>
						<TrashIcon
							class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
						/>
					</button>
				</div>
			</li>
		{/each}
	</ul>
</div>
