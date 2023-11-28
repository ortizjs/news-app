import React from 'react';
import {render, screen, logRoles } from '@testing-library/react';
import ArticleCard from './ArticleCard';

describe('ArticleCard', () => {
    test('renders correctly', () => {
        const article = {
            "headline": "Why Stars Are Renting Out Their Homes for Dirt Cheap",
            "thumbnail": "https://images.wsj.net/im-882665/",
            "source_url": "https://www.wsj.com/lifestyle/airbnb-rental-celebrities-hosts-5e226fc7",
        }
        render(<ArticleCard article={article}/>)
        
        const articleCardElement = screen.getByTestId('article-card-div');
        expect(articleCardElement).toBeInTheDocument();


        
    })
    test('renders image and article header', () => {
        const article = {
            "headline": "Why Stars Are Renting Out Their Homes for Dirt Cheap",
            "thumbnail": "https://images.wsj.net/im-882665/",
            "source_url": "https://www.wsj.com/lifestyle/airbnb-rental-celebrities-hosts-5e226fc7",
        }
        render(<ArticleCard article={article}/>)
        const articleCardImageElement = screen.getByRole('img');
        expect(articleCardImageElement).toBeInTheDocument()

        const articleTitleElement = screen.getByRole('heading');
        expect(articleTitleElement).toBeInTheDocument();
        expect(articleTitleElement).toHaveTextContent('Why Stars Are Renting Out Their Homes for Dirt Cheap');
    })
})