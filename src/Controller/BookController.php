<?php

namespace App\Controller;
use App\Entity\Author;
use App\Entity\Book;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;



class BookController extends AbstractController
{
    /**
     * @Route("/book", name="book")
     */
    public function index()
    {
        return $this->render('book/index.html.twig', [
            'controller_name' => 'BookController',
        ]);
    }
     /**
     * @Route("/book/add", name="add_book", methods={"GET"})
     */
     public function addBookForm(){
     	//получение всех авторов из бд
     	$entityManager = $this->getDoctrine()->getManager();
     	$authorRepo = $entityManager->getRepository(Author::class);
     	$authors = $authorRepo->findAll();
     	return $this->render('book/add_book.html.twig', ['authors'=>$authors]);

     }
     /**
     * @Route("/book/add", name="add_book_post", methods={"POST"})
     */
     public function addBook(Request $request){
     	//данные из POST по name
     	$title = $request->request->get('title');
     	$description = $request->request->get('description');
     	$author_id = $request->request->get('author_id');
     	// отладка вместо ардама
     	dump($title, $description, $author_id);
     	
     	//добавление в бд
     	$entityManager = $this->getDoctrine()->getManager();
     	$authorRepo = $entityManager->getRepository(Author::class);
     	$author = $authorRepo->find($author_id);//получение по id из базы
     	dump($author);
     	$book = new Book();
     	$book->setTitle($title);
     	$book->setDescription($description);
     	$book->setAuthor($author);
     	$entityManager->persist($book);
     	$entityManager->flush();
     	//Редирект по name и перенапрвление на страницу
     	return $this->redirectToRoute('add_book');
     }

}
