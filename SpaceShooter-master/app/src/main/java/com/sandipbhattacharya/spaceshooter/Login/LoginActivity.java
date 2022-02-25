package com.sandipbhattacharya.spaceshooter.Login;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.SharedMemory;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.sandipbhattacharya.spaceshooter.GameOver;
import com.sandipbhattacharya.spaceshooter.MainActivity;
import com.sandipbhattacharya.spaceshooter.R;
import com.sandipbhattacharya.spaceshooter.StartUp;

public class LoginActivity extends AppCompatActivity {
    EditText username, password;

    Button btnlogin;
    Button btnregister;
    DBHelper DB;
    String user;
    SharedPreferences sp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        sp = getSharedPreferences("MyUser",Context.MODE_PRIVATE);
        setContentView(R.layout.activity_login);
        username = (EditText) findViewById(R.id.username1);
        password = (EditText) findViewById(R.id.password1);
        btnlogin = (Button) findViewById(R.id.btnsignin1);
        btnregister = (Button) findViewById(R.id.btnsignin2);
        DB = new DBHelper(this);
        btnlogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                user = username.getText().toString();
                SharedPreferences.Editor editor = sp.edit();
                editor.putString("name",user);
                editor.commit();
                String user = username.getText().toString();
                String pass = password.getText().toString();

                if(user.equals("")||pass.equals(""))
                    Toast.makeText(LoginActivity.this, "Please enter all the fields", Toast.LENGTH_SHORT).show();
                else{
                    Boolean checkuserpass = DB.checkusernamepassword(user, pass);
                    if(checkuserpass==true){
                        Intent intent2 = new Intent(getApplicationContext(),GameOver.class);
                        intent2.putExtra("user", user);
                        Toast.makeText(LoginActivity.this, "Sign in successfull", Toast.LENGTH_SHORT).show();
                        finish();


                        Intent intent  = new Intent(getApplicationContext(), StartUp.class);
                        startActivity(intent);
                    }else{
                        Toast.makeText(LoginActivity.this, "Invalid Credentials", Toast.LENGTH_SHORT).show();
                    }
                }
            }
        });
        btnregister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(intent);
            }
        });
    }
}