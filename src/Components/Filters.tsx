import Checkbox from "./CheckBox";

export default function Filters({
	categories,
	getSelectedCategories,
}: {
	categories: any;
	getSelectedCategories: any;
}) {
	return (
		<div className="flex items-center mt-5">
			{categories.map((category: any) => (
				<Checkbox
					key={category.id}
					label={category.categoryName}
					id={category.id}
					getSelectedCategories={getSelectedCategories}
				/>
			))}
		</div>
	);
}
