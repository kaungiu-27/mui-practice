import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { movies } from './movies';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
function App() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(search.toLowerCase())
);
  return (
   <div className="min-h-screen bg-zinc-950 text-white p-4">
          <Typography
              variant="h3"
              sx={{
               fontWeight: 'bold',
               textAlign: 'center',
               mb: 4,
                }}
>
  MY ANIME COLLECTION
</Typography>

<TextField
  label="アニメを検索"
  placeholder="例：Jujutsu Kaisen"
  variant="outlined"
  value={search}
  onChange={(event) => setSearch(event.target.value)}
  sx={{ mb: 3, width: 350, maxWidth: '100%', backgroundColor: 'white' }}
/>
<Button
  variant="contained"
  color="error"
  onClick={() => setOpen(true)}
  sx={{ ml: 2, mb: 3 }}
>
  ＋ 新規登録
</Button>
<Dialog open={open} onClose={() => setOpen(false)}>
  <div style={{ padding: 24 }}>
    アニメを新規登録
  </div>
  <TextField
  label="アニメのタイトル"
  placeholder="例：Naruto"
  fullWidth
  margin="normal"
  value={newTitle}
onChange={(event) => setNewTitle(event.target.value)}
/>
</Dialog>

          <Grid container spacing={3}>
          {filteredMovies.map((movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
  key={movie.id}
  sx={{
  marginTop: 3,
  padding: 3,
  width: '100%',
  backgroundColor: '#202024',
  color: '#ffffff',
}}
      >
        <CardMedia
                  component="img"
                   image={`${import.meta.env.BASE_URL}${movie.image}`}
                    alt={movie.title}
                    sx={{
                         width: '100%',
                         maxWidth: 320,
                         marginX: 'auto',
                         aspectRatio: '2 / 3',
                         objectFit: 'contain',
                         marginBottom: 2,
}}
/>
            <Typography variant="h5" sx={{ fontWeight: 'bold', ml: 6 }}>
             {movie.title}
           </Typography>
           <Chip label={movie.category} color="primary" size="small" sx={{ mt: 2, ml: 6 }} />
           <Chip label={movie.genre} color="warning" variant="outlined" size="small" sx={{ mt: 2, ml: 1 }} />
      </Card>
      </Grid>
      ))}
      </Grid>
</div>
  );
}

export default App;