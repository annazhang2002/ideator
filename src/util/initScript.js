import { editorsRef, auth, questionsRef } from '../firebase'
import { addEditors, setIsEditor } from '../redux/actions/editors.action'
import store from '../redux/store';
import { addQuestions } from '../redux/actions/questions.action';
import _ from 'lodash'

const fetchEditors = () => {
    editorsRef
        .get()
        .then(
            querySnapshot => {
                console.log("get editors from firebase")
                querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                    store.dispatch(addEditors(doc.data()))
                    if (auth.currentUser.uid === doc.data().id) {
                        store.dispatch(setIsEditor(true))
                    }
                })
            })
}

const fetchQuestions = () => {
    // get universal questions
    questionsRef
        .where('isUniversal', '==', true)
        .onSnapshot(
            querySnapshot => {
                const universalQuestions = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

                // get individual questions
                questionsRef
                    .where('user', '==', auth.currentUser.uid)
                    .onSnapshot(
                        querySnapshot => {
                            const individualQuestions = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

                            // filter questions and add to redux
                            const allQuestions = _.unionBy(individualQuestions, universalQuestions, (question) => question.id)
                            store.dispatch(addQuestions(allQuestions))
                        }
                    )
            },
            error => {
                console.log(error);
            }
        )
}

export const initScript = () => {
    console.log('run initial script')
    fetchEditors();
    fetchQuestions();
}