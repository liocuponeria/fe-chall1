import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Button from '../../components/Button';

const ButtonList = ({ currentCategory, onClick }) => {
  const themeContext = useContext(ThemeContext);
  const categoriesList = [
    { name: 'Ver tudo', id: '' },
    { name: 'Eletrônicos', id: 'electronics' },
    { name: 'Jóias', id: 'jewelery' },
    { name: 'Roupas masculinas', id: 'men clothing' },
    { name: 'Roupas femininas', id: 'women clothing' },
  ];

  const localOnClick = (id) => () => onClick(id);

  return (
    <>
      {categoriesList.map((item) => {
        const isSelected = item.id === currentCategory;
        const textColor = 'black';
        const bgColor = isSelected ? themeContext.colors.yellow : 'white';

        return <Button key={item.name} style={{ marginRight: '10px' }} onClick={localOnClick(item.id)} textColor={textColor} bgColor={bgColor}>{item.name}</Button>;
      })}
    </>
  );
};

export default ButtonList;

ButtonList.propTypes = {
  currentCategory: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ButtonList.defaultProps = {
  currentCategory: '',
};
