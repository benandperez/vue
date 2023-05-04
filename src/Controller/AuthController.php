<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
{
    #[Route('/register', name: 'register')]
    public function register(): JsonResponse
    {
        return new jsonResponse([
            'msg' => 'register success'
        ]);
    }
    #[Route('/login', name: 'login')]
    public function login(): JsonResponse
    {
        return new jsonResponse([
            'msg' => 'login success'
        ]);
    }
    #[Route('/logout', name: 'logout')]
    public function logout(): JsonResponse
    {
        return new jsonResponse([
            'msg' => 'logout success'
        ]);
    }
}
