import React from 'react'
import { useForm } from 'react-hook-form';

const MealSearchForm = ({onSubmit, mealImg, mealCatName}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 shadow-gray-200 dark:shadow-gray-800 dark:bg-gray-700">
        <div className="flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">{mealCatName}</h2>
                <div className="dark:text-gray-400">With...</div>
            </div>
            <img src={mealImg} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 '>
            <div className="flex flex-col">
                <label htmlFor="health" className="font-bold text-lg mb-2 block text-left">Free of...</label>
                {errors.health && <span>{errors.health.message}</span>}
                <select 
                    id="health" 
                    name="health" 
                    multiple 
                    className='mb-6 flex w-full rounded-md border-2 bg-background px-2 py-1.5 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined'
                    {...register("health", { required: "Choose at least one option" })}
                >
                    
                    <option value="">--</option>
                    <option value="alcohol-free">alcohol-free</option>
                    <option value="celery-free">celery-free</option>
                    <option value="crustacean-free">crustacean-free</option>
                    <option value="dairy-free">dairy-free</option>
                    <option value="egg-free">egg-free</option>
                    <option value="fish-free">fish-free</option>
                    <option value="fodmap-free">fodmap-free</option>
                    <option value="gluten-free">gluten-free</option>
                    <option value="immuno-supportive">immuno-supportive</option>
                    <option value="keto-friendly">keto-friendly</option>
                    <option value="kidney-friendly">kidney-friendly</option>
                    <option value="kosher">kosher</option>
                    <option value="low-fat-abs">low-fat-abs</option>
                    <option value="low-potassium">low-potassium</option>
                    <option value="low-sugar">low-sugar</option>
                    <option value="lupine-free">lupine-free</option>
                    <option value="mustard-free">mustard-free</option>
                    <option value="no-oil-added">no-oil-added</option>
                    <option value="paleo">paleo</option>
                    <option value="peanut-free">peanut-free</option>
                    <option value="pescatarian">pescatarian</option>
                    <option value="pork-free">pork-free</option>
                    <option value="red-meat-free">red-meat-free</option>
                    <option value="sesame-free">sesame-free</option>
                    <option value="shellfish-free">shellfish-free</option>
                    <option value="soy-free">soy-free</option>
                    <option value="sugar-conscious">sugar-conscious</option>
                    <option value="tree-nut-free">tree-nut-free</option>
                    <option value="vegan">vegan</option>
                    <option value="vegetarian">vegetarian</option>
                    <option value="wheat-free">wheat-free</option>
                </select>

                <label htmlFor="calories" className="font-bold text-lg mb-2 block text-left">Calories</label>
                {errors.calories && <span>{errors.calories.message}</span>}
                <input 
                    type="text" 
                    id="calories" 
                    name="calories" 
                    placeholder='100-200'
                    className="mb-6 flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
                    {...register('calories', {
                        required: 'This field is obligatory',
                        pattern: {
                            value: /^[0-9-]*$/,
                            message: 'Only numbers or range of numbers are allowed',
                        },
                    })}
                />

                <label htmlFor="category" className="font-bold text-lg mb-2 block text-left">Category</label>
                {errors.category && <span>{errors.category.message}</span>}
                <select 
                    id="category" 
                    name="category" 
                    multiple 
                    className='mb-6 flex w-full rounded-md border-2 bg-background px-2 py-1.5 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined'
                    {...register("category", { required: "Choose at least one option" })}>
                    <option value="">--</option>
                    <option value="generic-foods">generic-foods</option>
                    <option value="generic-meals">generic-meals</option>
                    <option value="packaged-foods">packaged-foods</option>
                    <option value="fast-foods">fast-foods</option>
                </select>

                <input type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-700 dark:text-gray-50 cursor-pointer" value='Search'/>
            </div>
        </form>
    </div>
  )
}

export default MealSearchForm;
