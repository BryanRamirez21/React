
import React from 'react';
import { expect, describe, it, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MealSearchForm from '../MealSearchForm';
import MealsCategoriesItem from '../MealsCategoriesItem';
import MealsItems from '../MealsItem';
import ReturnButton from '../ReturnButton';

describe('MealSearchForm', () => {
    it('renders correctly', () => {
        render(<MealSearchForm />);

        expect(screen.getByLabelText('Free of...')).toBeTruthy();
        expect(screen.getByLabelText('Calories')).toBeTruthy();
        expect(screen.getByLabelText('Category')).toBeTruthy();
        expect(screen.getByRole('button', { name: 'Search' })).toBeTruthy();
    });
});

describe('MealsCategoriesItem', () => {
    it('renders correctly', () => {
        const category = {
            strCategoryThumb: 'https://example.com/image.jpg',
            strCategory: 'Example Category',
            idCategory: 'example-id',
        };
        const onClickMock = () => {};

        const { container } = render(<MealsCategoriesItem {...category} onClick={onClickMock} />);

        const image = container.querySelector('img');
        expect(image).toBeTruthy();

        const text = container.querySelector('.text-lg');
        expect(text).toBeTruthy();
    });  
});

describe('MealsItems', () => {
    it('renders correctly', () => {
        const food = {
            image: 'https://example.com/image.jpg',
            label: 'Example Food',
            nutrients: {
                ENERC_KCAL: 100,
                PROCNT: 10,
                FAT: 5,
                CHOCDF: 20,
            },
        };

        const { container } = render(<MealsItems food={food} />);

        expect(container.querySelector('img')).toBeTruthy();
        expect(container.querySelector('p').textContent).toContain('Example Food');
        expect(container.querySelectorAll('.rounded-full').length).toBe(4);
    });

    it('throws an error if food object is missing', () => {
        expect(() => render(<MealsItems />)).toThrowError('Loading information error');
    });
});

describe('ReturnButton', () => {
    let originalNavigate;
    beforeEach(() => {
        originalNavigate = window.location.href;
        window.location.href = "http://example.com";
    });
    afterEach(() => {
        window.location.href = originalNavigate;
    });
    it('renders correctly', async () => {
        const { container } = render(
            <MemoryRouter>
                <ReturnButton isCat={true} />
            </MemoryRouter>
        );
        
        const returnToRecipeFormButton = screen.getByText('Return to recipie form');
        expect(returnToRecipeFormButton).toBeTruthy();

        const returnToCategoriesButton = screen.getByText('Return to categories');
        expect(returnToCategoriesButton).toBeTruthy();

        const goCatButton = container.querySelector('button');
        goCatButton.click();
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(window.location.href).toEqual("http://example.com/");
    });
});
