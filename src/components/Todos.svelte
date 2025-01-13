<script lang="ts">
	import type { TodoProps } from '../@types'
	import Todo from './Todo.svelte'

	interface Props {
		todos: TodoProps[]
		removeTodo: (id: number) => void
	}

	const { todos, removeTodo }: Props = $props()
</script>

<div class="flex justify-center">
	<ul class="mt-8 max-w-lg mx-0 grow">
		{#each todos as todo}
			<Todo {todo} {removeTodo} />
		{/each}
	</ul>
</div>
