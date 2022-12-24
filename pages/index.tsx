import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Home() {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
}
