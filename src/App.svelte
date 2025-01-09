<script lang="ts">
	import { SearchIcon, SunIcon } from './components'

	const storedTheme = localStorage.getItem('theme')
	let isDarkMode: string = storedTheme === 'dark' ? 'dark' : 'light'

	const toggleDarkMode = () => {
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
					/>
					<SearchIcon
						class="absolute right-4 top-2 transition-colors duration-300 fill-violet"
					/>
				</label>

				<div class="flex justify-between items-center space-x-5 lg:space-x-4">
					<select
						class="rounded-md h-10 bg-violet text-grey px-2 py-1 lg:w-28 outline-none uppercase font-medium text-xs"
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
						<SunIcon
							class="fill-[#f7f7f7] group-active:fill-violet transition-colors duration-300"
						/>
					</button>
				</div>
			</div>
		</div>
	</section>
</main>
