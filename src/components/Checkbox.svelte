<script lang="ts">
	const {
		isCompleted,
		id,
		title,
		onChange,
	}: {
		isCompleted: boolean
		id: number
		title: string
		onChange: () => void
	} = $props()
</script>

<label class="flex items-center relative space-x-3">
	<input
		type="checkbox"
		class="before:content[''] relative cursor-pointer appearance-none border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet checked:bg-violet checked:before:bg-violet hover:before:opacity-10 accent-violet p-1 outline-none w-6 h-6 rounded-sm border-violet peer"
		checked={isCompleted}
		onchange={onChange}
		id={`todo-${id}`}
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
		{title}
	</span>
</label>
