export const state = () => ({
    identifiant: 'test identifiant',
    authenticated: false
})

export const mutations = {
    login(state) {
        state.authenticated = true;
    },
    logout(state) {
        state.authenticated = false;
    },
    setIdentifiant(state, identifiant) {
        console.log('setIdentifiant');
        state.identifiant = identifiant;
        console.log(state);
    }
}