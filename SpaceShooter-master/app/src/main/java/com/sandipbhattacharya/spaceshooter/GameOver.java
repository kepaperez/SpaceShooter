package com.sandipbhattacharya.spaceshooter;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.sandipbhattacharya.spaceshooter.Login.DBHelper;
import com.sandipbhattacharya.spaceshooter.Login.LoginActivity;

public class GameOver extends AppCompatActivity {

    DBHelper DB ;
    TextView tvPoints;



    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        DB = new DBHelper(this);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game_over);
        int points = getIntent().getExtras().getInt("points");

    //String name = getIntent().getExtras().getString("user");

        SharedPreferences sp = getApplicationContext().getSharedPreferences("MyUser" , Context.MODE_PRIVATE);
        String name = sp.getString("name","");




        tvPoints = findViewById(R.id.tvPoints);
        tvPoints.setText("" + points);


      DB.insertPartida(name, String.valueOf(points));


    }

    public void restart(View view) {
        Intent intent = new Intent(GameOver.this, StartUp.class);
        startActivity(intent);
        finish();

    }


    public void exit(View view) {
        Intent intent = new Intent(GameOver.this, LoginActivity.class);
        startActivity(intent);
        finish();
    }
}
