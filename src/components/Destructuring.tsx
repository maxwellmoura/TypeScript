import React from 'react';

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    //Enum
    category: Category
}
export enum Category{
    JS = "JavaScript",
    TS = "TypeScript",
    RC = "React",
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
return (
      <div>
        <h1>{title}</h1>
        <h2>{content}</h2>
        <h3>Quantidade de comentario: {commentsQty}</h3>
        <div>
            {tags.map(tag =>(
                <span>#{tag}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
      </div>
    );
  }
export default Destructuring
