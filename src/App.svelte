<script>
    // COMPONENTS //
        import Header from './components/Header.svelte'
        import Sections from './components/Sections.svelte'
        import Cursor from './components/Cursor.svelte'
        import NavBar from './components/NavBar.svelte'
        import Project from './components/Project.svelte'
    // CONSTANTS //
        import { projects } from './constants/projects.js'
</script>


<style>
    h2{
        color: white;
        text-align: center; 
        margin-top: 1rem;
        font-size: 3rem;
    }
</style>


<Header/>
<main>
        <Sections/>
    <h2>Projects</h2>
    {#each projects as project (project.id)}
        <Project {...project}/>
    {/each}
    <Cursor/>
    <NavBar/>
</main>