<script lang="ts">
	import { derived, writable, type Writable } from 'svelte/store'
	import {
		PlusIcon,
		SearchIcon,
		MoonIcon,
		SunIcon,
		Todos,
		Modal,
	} from './components'
	import type { Filter, TodoProps } from './@types'

	let searchValue = writable<string>('')
	let isVisible: boolean = $state(false)
	let selectedFilter: Writable<Filter> = writable('all')
	const storedTheme: string | null = localStorage.getItem('theme')
	let isDarkMode: string = $state(storedTheme === 'dark' ? 'dark' : 'light')
	const todos = writable<TodoProps[]>([
		{ id: 1, title: 'Note #1', completed: false },
		{ id: 2, title: 'Note #2', completed: true },
		{ id: 3, title: 'Note #3', completed: false },
	])

	const displayedTodos = derived(
		[todos, searchValue, selectedFilter],
		([$todos, $searchValue, $selectedFilter]) => {
			return $todos.filter((todo: TodoProps) => {
				const matchesSearch = todo.title
					.toLowerCase()
					.trim()
					.includes($searchValue.toLowerCase().trim())

				const matchesFilter =
					$selectedFilter === 'all' ||
					($selectedFilter === 'completed' && todo.completed) ||
					($selectedFilter === 'uncompleted' && !todo.completed)
				return matchesSearch && matchesFilter
			})
		}
	)

	const toggleDarkMode = (): void => {
		if (isDarkMode === 'light') {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
			isDarkMode = 'dark'
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
			isDarkMode = 'light'
		}
	}

	const removeTodo = (id: number): void => {
		todos.set($todos.filter((todo: TodoProps) => todo.id !== id))
	}

	const openCloseModal = (): void => {
		isVisible = !isVisible
	}

	const addTodo = (todo: TodoProps): void => {
		todos.update($todos => {
			return [...$todos, todo]
		})
	}
</script>

<main>
	<section class="py-10">
		<div class="container">
			<h1
				class="pt-10 text-center uppercase font-medium text-[26px] leading-9 text-black dark:text-white transition-colors duration-300"
			>
				Todo list
			</h1>

			<div
				class="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between space-x-4 mt-4"
			>
				<label class="w-full relative group">
					<input
						class="relative w-full lg:w-full py-2 h-10 pl-4 pr-10 rounded-md outline-none bg-white border-2 border-violet dark:border-grey dark:bg-mainBlack placeholder:font-medium placeholder:text-base placeholder:leading-4 placeholder:text-[#C3C1E5] placeholder:dark:text-[#666] placeholder:select-none focus:dark:border-violet transition-colors duration-300"
						type="search"
						placeholder="Search note..."
						oninput={(event: Event) => {
							searchValue.update(
								() => (event.target as HTMLInputElement)?.value
							)
						}}
					/>

					<SearchIcon
						class="absolute right-4 top-2 transition-colors duration-300 fill-violet"
					/>
				</label>

				<div class="flex justify-between items-center space-x-5 lg:space-x-4">
					<select
						class="rounded-md h-10 bg-violet text-grey px-2 py-1 lg:w-28 outline-none uppercase font-medium text-xs"
						onchange={(event: Event) =>
							selectedFilter.update(
								() => (event.target as HTMLSelectElement)?.value as Filter
							)}
					>
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>

					<button
						onclick={toggleDarkMode}
						title="toggle dark mode"
						aria-label="Toggle dark mode"
						class="rounded-md h-10 border-2 border-violet bg-violet p-2 active:bg-white transition-colors duration-300 group"
					>
						{#if isDarkMode === 'dark'}
							<SunIcon
								class="fill-[#f7f7f7] group-active:fill-violet transition-colors duration-300"
							/>
						{:else}
							<MoonIcon />
						{/if}
					</button>
				</div>
			</div>
		</div>

		{#if $displayedTodos.length > 0}
			<Todos todos={$displayedTodos} {removeTodo} />
		{:else}
			<div class="flex items-center pt-10 flex-col select-none space-y-5">
				{#if isDarkMode === 'dark'}
					<img
						src="./img/detective-dark.png"
						alt="detective dark"
						width="200"
						height="170"
					/>
				{:else}
					<img
						src="./img/detective.png"
						alt="detective"
						width="200"
						height="170"
					/>
				{/if}
				<p
					class="text-xl leading-5 font-normal text-center text-black dark:text-white transition-colors duration-300"
				>
					Empty...
				</p>
			</div>
		{/if}

		{#if isVisible}
			<Modal {openCloseModal} {addTodo} />
		{/if}
	</section>
</main>

<button
	onclick={openCloseModal}
	title="modal btn"
	aria-label="Open modal"
	class="bg-violet border-2 border-violet fixed bottom-8 right-8 md:right-20 lg:right-[12%] xl:right-[25%] p-3 rounded-full active:bg-grey transition-colors duration-300 outline-none group"
>
	<PlusIcon
		class="fill-[#f7f7f7] group-active:fill-violet transition-colors duration-300"
	/>
</button>
