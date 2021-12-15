import React, { useState } from 'react';
import { Button, Grid } from "@material-ui/core";
import Navbar from './../../components/Navbar';
import ModalCustom from '../../components/Modal';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar titulo="titulo" />
      <Grid container>
        <br />
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpen(!open)}
        >Teste
        </Button>
        <ModalCustom open={open} />
      </Grid>
    </div>
  )
};
