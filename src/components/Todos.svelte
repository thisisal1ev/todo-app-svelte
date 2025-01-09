<script lang="ts">
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
					<label class="flex items-center relative space-x-3">
						<input
							type="checkbox"
							class="before:content[''] relative cursor-pointer appearance-none border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet checked:bg-violet checked:before:bg-violet hover:before:opacity-10 accent-violet p-1 outline-none w-6 h-6 rounded-sm border-violet peer"
							bind:checked={todo.completed}
							id={`todo-${todo.id}`}
						/>
						<span
							class="absolute text-white transition-opacity opacity-0 pointer-events-none -translate-x-2/4 top-1 peer-checked:opacity-100"
						>
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask id="path-1-inside-1_636_603" fill="white">
									<path
										d="M4.99805 14.6488L0.000261426 9.74757L9.55951 9.85688e-06L14.5573 4.90125L4.99805 14.6488Z"
									/>
								</mask>
								<path
									d="M4.99805 14.6488L3.59769 16.0767L5.02563 17.4771L6.42599 16.0492L4.99805 14.6488ZM6.3984 13.2209L1.40062 8.31963L-1.40009 11.1755L3.59769 16.0767L6.3984 13.2209ZM13.1294 3.50089L3.57011 13.2484L6.42599 16.0492L15.9852 6.3016L13.1294 3.50089Z"
									fill="#F7F7F7"
									mask="url(#path-1-inside-1_636_603)"
								/>
							</svg>
						</span>
						<span
							class="inline-block font-medium text-sm sm:text-base lg:text-xl leading-5 peer-checked:line-through text-black dark:text-white transition-colors duration-300"
						>
							{todo.title}
						</span>
					</label>
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
