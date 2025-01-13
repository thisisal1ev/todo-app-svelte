<script lang="ts">
	import type { TodoProps } from '../@types'
	import { EditIcon, TrashIcon } from './icons'
	import { Checkbox, IconButton } from './'

	interface Props {
		todo: TodoProps
		removeTodo: (id: number) => void
	}

	const { removeTodo, todo }: Props = $props()
</script>

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
		<IconButton removeTodo={() => removeTodo(todo.id)}>
			<EditIcon
				class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
			/>
		</IconButton>

		<IconButton removeTodo={() => removeTodo(todo.id)}>
			<TrashIcon
				class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
			/>
		</IconButton>
	</div>
</li>
