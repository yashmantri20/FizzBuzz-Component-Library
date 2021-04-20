import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button/Button';
import { Image } from '../components/Image/Image';
import { Alert } from '../components/Alert/Alert';
import { Avatar } from '../components/Avatar/Avatar';
import { Spinner } from '../components/Spinner/Spinner';
import { Progress } from '../components/Progress/Progess';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { ScrollTop } from '../components/Top/ScrollToTop';

const stories = storiesOf('Library', module);

stories.add('FizzBuzz', () => {
  return (
    <div style={{ overflow: 'auto', width: '400px', height: '500px' }}>

      <ScrollTop style={{ backgroundColor: 'red' }} />
      <Spinner
        size='lg'
        style={{ width: '40px', height: '40px', color: 'red' }}
      />
      <Progress value='120' />
      <Avatar
        src='https://picsum.photos/200/300'
        style={{ marginRight: '15px' }}
      />
      <Avatar
        name='Yash'
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'green',
          cursor: 'pointer',
        }}
      />
      <Avatar />
      <Alert />
      <Tooltip
        label='Yash'
        bg='red'
        style={{ backgroundColor: 'green', width: '200px' }}
      >
        Yashh
      </Tooltip>

      <Image
        size='lg'
        src='https://picsum.photos/200/300'
        style={{ cursor: 'pointer' }}
        onClick={() => console.log('Clicked')}
      />
      <Image style={{ width: '250px', height: '250px' }} />
      <Button
        variant='primary'
        colorScheme='teal'
        onClick={() => console.log('yash')}
      />
      <Button
        variant='outline'
        style={{ color: 'red' }}
        onClick={() => console.log('yash')}
      />
      <Button variant='ghost' colorScheme='red' />
      <Button variant='link' colorScheme='teal' />
    </div>
  );
});
