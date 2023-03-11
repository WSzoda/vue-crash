<script setup>
    import Question from '../components/Question.vue';
    import QuizHeader from "../components/QuizHeader.vue"
    import Result from "..//components/Result.vue"
    import quizes from "../data/quizes.json"
    import { useRoute } from "vue-router"
    import { ref, computed } from "vue"

    const route = useRoute()

    const quizId = parseInt(route.params.id)
    const quiz = quizes.find(q => q.id === quizId)

    const currentQuestionIndex = ref(0)
    const correctQuestions = ref(0)
    const showResults = ref(false)

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
    const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`)

    const onOptionSelected = (isCorrect) => {
        if(isCorrect){
            correctQuestions.value++
        }
        currentQuestionIndex.value++
        if(currentQuestionIndex.value === quiz.questions.length){
            showResults.value = true;
        }
    }

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage"/>
        <div>
            <Question 
                v-if="!showResults"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <Result 
            v-else
            :correctQuestions="correctQuestions"
            :howManyQuestions="quiz.questions.length"
            />
        </div>
    </div>
</template>
