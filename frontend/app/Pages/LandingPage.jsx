'use client'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'
import HomePage from './HomePage'
import AdminPage from './AdminPage'

function LandingPage() {
    const { user } = useAuth();
  return (
    <div>
        {user?.role === 'admin' ? <AdminPage /> : <HomePage />}
    </div>
  )
}

export default LandingPage