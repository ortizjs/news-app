import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { BeatLoader } from 'react-spinners';
import firebaseApp from './../../firebase';
import ArticleCard from './ArticleCard';
import './ArticlesIndex.css';

const ArticlesIndex = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchArticles = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const colRef = collection(db, 'articles');
        const snapshot = await getDocs(colRef);
        const fetchedArticles = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error.message);
        setLoading(false);
      }
    };

    const handleArticleUrlClick = (url) => {
        window.open(url, '_blank');
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
      <div className='index-container'>
        {!loading && articles.length > 0 ? (
          <div className='articles-container'>
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article} clickHandler={handleArticleUrlClick}/>
            ))}
          </div>
        ) : (
          <div className='empty' >
            <BeatLoader color={'#2e4bbb'} loading={loading} size={15} />
            <h2>Loading...</h2>
          </div>
        )}
      </div>
    );
}

export default ArticlesIndex
