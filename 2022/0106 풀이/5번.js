const commentInput = document.getElementById('user-comment-input') // 사용자 댓글 입력창
const userComments = document.getElementById('user-comments') // 사용자 댓글 리스트 출력

const submitBtn = document.getElementById('user-comment-add') //  사용자 댓글 추가 버튼
const comments = [] // 사용자 댓글목록 배열
const insults = ['shit', 'fuck', 'poop', 'dumb', '새끼', '놈', '똥', '씨발', '좇', '시발', '좆', '죽어', '뒤져', '병신', '년']


// 댓글 정보로부터 댓글에 대한 DOM 객체 생성 및 반환
function buildElement(comment){
   const commentEl = document.createElement('div')
   commentEl.className = 'comment'
   commentEl.innerHTML = comment //컨텐츠로 댓글을 추가
   return commentEl
}
// comments 배열을 이용하여 화면에 댓글목록 보여주기
function displayComments(comments){
    userComments.innerHTML = ''
    comments.forEach(comment => {
        userComments.appendChild(buildElement(comment))
        
    });
}

// 입력창 초기화
function initInput(){
    commentInput.value = ''
}

// 댓글 추가하기
function addComment(){
    const comment = commentInput.value

    if(comment !== ''){
        // 구현하기 => 사용자 입력 추가
        const modifiedComment = comment
        comment
        .split(' ')
        .map(word =>{
            if(insults.findIndex(insult => word.toLowerCase().includes(insults)) >-1)return '😊'
            else return word
        }).join()
        comment.push(modifiedComment)//댓글목록을 저장하는 comments배열에 수정된 댓글추가

    }else{
        alert('You need to give a comment !')
    }
}

submitBtn.addEventListener('click', addComment)